module.exports = {
    username: "dosanyintolu",
    gitAuthor: "Self-hosted Renovate Bot <doyin.osanyintolu@gmail.com>",
    platform: 'github',
    dependencyDashboard: true,
    onboardingConfig: {
        extends: ['config:base',':rebaseStalePrs'],
    },
    labels: ["renovatebot"],
    // schedule: ["every weekend"],
    packageRules: [
        {
            "matchPackageNames": ["hashicorp/terraform"],
            "groupName": "terraform",
            "matchUpdateTypes": ["minor", "patch", "pin", "digest"], 
            "automerge": true,
            "autoApprove": true,
            "updateLockFiles": true,
            "lockFileMaintenance": { "enabled": true }
        }
    ],
    // Managers https://docs.renovatebot.com/modules/manager/#enabling-and-disabling-managers
    enabledManagers: ["terraform"],
    repositories: ['renovate-bot']
};
