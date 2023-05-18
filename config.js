
module.exports = {
    username: "cdc-coe-botfrey[bot]",
    gitAuthor: "Self-hosted Renovate Bot <123456+cdc-coe-botfrey[bot]@users.noreply.github.enterprise.com>",
    platform: 'github',
    dependencyDashboard: true,
    onboardingConfig: { extends: ['config:base',':rebaseStalePrs'] },
    labels: ["renovatebot"],
    enabledManagers: ["terraform"],
    repositories: ['renovate-bot']
};
