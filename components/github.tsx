'use client';

import { useEffect, useState } from 'react';
import { Github, MapPin, Users, BookOpen, Link as LinkIcon } from 'lucide-react';

export default function GitHub() {
  const username = 'krisdikachi';
  const [profile, setProfile] = useState<any>(null);
  const [pinned, setPinned] = useState<any[]>([]);
  const [activity, setActivity] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      const [profileRes, pinnedRes, activityRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://gh-pinned-repos.egoist.dev/?username=${username}`),
        fetch(`https://api.github.com/users/${username}/events/public`),
      ]);
      setProfile(await profileRes.json());
      setPinned(await pinnedRes.json());
      setActivity(await activityRes.json());
      setLoading(false);
    }
    fetchAll();
  }, []);

  return (
    <section id="github" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-10 text-center">GitHub</h2>
        {loading ? (
          <div className="text-center py-12">Loading GitHub data...</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-1 bg-card rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center">
              <img src={profile.avatar_url} alt={profile.name} className="w-32 h-32 rounded-full border mb-4" />
              <h3 className="text-2xl font-bold">{profile.name}</h3>
              <div className="text-muted-foreground mb-2">@{profile.login}</div>
              <div className="mb-3 text-sm">{profile.bio}</div>
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {profile.location && (
                  <span className="inline-flex items-center gap-1 text-xs bg-secondary px-2 py-1 rounded">
                    <MapPin className="w-4 h-4" /> {profile.location}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs bg-secondary px-2 py-1 rounded">
                  <Users className="w-4 h-4" /> {profile.followers} followers
                </span>
                <span className="inline-flex items-center gap-1 text-xs bg-secondary px-2 py-1 rounded">
                  <BookOpen className="w-4 h-4" /> {profile.public_repos} repos
                </span>
              </div>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded font-medium hover:bg-primary/90 transition-colors duration-200 mt-2"
              >
                <Github className="w-5 h-5" /> View GitHub Profile
              </a>
            </div>

            {/* Main Content: Contributions, Pinned, Activity */}
            <div className="md:col-span-2 flex flex-col gap-8">
              {/* Contributions Graph */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 mb-4">
                <h4 className="text-lg font-semibold mb-4">Contributions</h4>
                <div className="overflow-x-auto">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&bg_color=00000000`}
                    alt="GitHub stats"
                    className="mb-2"
                  />
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&hide_border=true&background=FFFFFF00`}
                    alt="GitHub streak"
                    className="mb-2"
                  />
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&bg_color=00000000`}
                    alt="Top languages"
                  />
                </div>
              </div>

              {/* Pinned Repos */}
              <div className="bg-card rounded-2xl p-6 border border-border/50 mb-4">
                <h4 className="text-lg font-semibold mb-4">Pinned Repositories</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {pinned.map((repo: any) => (
                    <a
                      key={repo.repo}
                      href={repo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-secondary/40 rounded-xl p-4 border border-border/30 hover:shadow-lg transition-all duration-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Github className="w-5 h-5 text-primary" />
                        <span className="font-semibold text-primary">{repo.repo}</span>
                      </div>
                      <div className="text-sm mb-2 text-muted-foreground">{repo.description}</div>
                      <div className="flex gap-2 text-xs">
                        {repo.language && (
                          <span className="bg-card px-2 py-1 rounded">{repo.language}</span>
                        )}
                        <span>★ {repo.stars}</span>
                        <span>🍴 {repo.forks}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h4 className="text-lg font-semibold mb-4">Recent Activity</h4>
                <ul className="max-h-60 overflow-y-auto space-y-3">
                  {activity.slice(0, 10).map((event: any, idx: number) => (
                    <li key={event.id || idx} className="border-b pb-2">
                      <div className="font-medium">{event.type.replace(/Event$/, '')}</div>
                      <div className="text-xs text-muted-foreground">
                        {event.repo?.name} &middot; {event.actor?.login} &middot; {new Date(event.created_at).toLocaleString()}
                      </div>
                      {event.payload?.commits && event.payload.commits.length > 0 && (
                        <div className="text-xs mt-1">
                          Commits: {event.payload.commits.map((c: any) => c.message).join(', ')}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}