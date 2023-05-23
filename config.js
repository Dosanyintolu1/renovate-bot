module.exports = {
    username: "cdc-coe-botfrey[bot]",
    gitAuthor: "Self-hosted Renovate Bot <123456+cdc-coe-botfrey[bot]@users.noreply.github.enterprise.com>",
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
    repositories: ['Dosanyintolu1/renovate-bot']
};
