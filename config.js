
module.exports = {
    username: "test-bot",
    gitAuthor: "Self-hosted Renovate Bot <123456+test-bot@users.noreply.github.enterprise.com>",
    platform: 'github',
    dependencyDashboard: true,
    onboardingConfig: { extends: ['config:base',':rebaseStalePrs'] },
    labels: ["renovatebot"],
    enabledManagers: ["terraform"],
    repositories: ['renovate-bot']
};
