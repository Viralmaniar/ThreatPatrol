window.ATOMICS_CONTAINERS_DATA = [
    {
        "Tactic":  "discovery",
        "Technique #":  "T1613",
        "Technique Name":  "Container and Resource Discovery",
        "Test #":  "1",
        "Test Name":  "Docker Container and Resource Discovery",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1613",
        "Technique Name":  "Container and Resource Discovery",
        "Test #":  "2",
        "Test Name":  "Podman Container and Resource Discovery",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1046",
        "Technique Name":  "Network Service Discovery",
        "Test #":  "9",
        "Test Name":  "Network Service Discovery for Containers",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1552.007",
        "Technique Name":  "Kubernetes List Secrets",
        "Test #":  "1",
        "Test Name":  "List All Secrets",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1552.007",
        "Technique Name":  "Kubernetes List Secrets",
        "Test #":  "2",
        "Test Name":  "ListSecrets",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1053.007",
        "Technique Name":  "Kubernetes Cronjob",
        "Test #":  "1",
        "Test Name":  "ListCronjobs",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1053.007",
        "Technique Name":  "Kubernetes Cronjob",
        "Test #":  "2",
        "Test Name":  "CreateCronjob",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1136.001",
        "Technique Name":  "Create Account: Local Account",
        "Test #":  "10",
        "Test Name":  "Create a Linux user via kubectl in a Pod",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1053.007",
        "Technique Name":  "Kubernetes Cronjob",
        "Test #":  "1",
        "Test Name":  "ListCronjobs",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1053.007",
        "Technique Name":  "Kubernetes Cronjob",
        "Test #":  "2",
        "Test Name":  "CreateCronjob",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1611",
        "Technique Name":  "Escape to Host",
        "Test #":  "1",
        "Test Name":  "Deploy container using nsenter container escape",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1611",
        "Technique Name":  "Escape to Host",
        "Test #":  "2",
        "Test Name":  "Mount host filesystem to escape privileged Docker container",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1611",
        "Technique Name":  "Escape to Host",
        "Test #":  "3",
        "Test Name":  "Privilege Escalation via Docker Volume Mapping",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "execution",
        "Technique #":  "T1053.007",
        "Technique Name":  "Kubernetes Cronjob",
        "Test #":  "1",
        "Test Name":  "ListCronjobs",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "execution",
        "Technique #":  "T1053.007",
        "Technique Name":  "Kubernetes Cronjob",
        "Test #":  "2",
        "Test Name":  "CreateCronjob",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "execution",
        "Technique #":  "T1610",
        "Technique Name":  "Deploy a container",
        "Test #":  "1",
        "Test Name":  "Deploy Docker container",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "execution",
        "Technique #":  "T1609",
        "Technique Name":  "Kubernetes Exec Into Container",
        "Test #":  "1",
        "Test Name":  "ExecIntoContainer",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "execution",
        "Technique #":  "T1609",
        "Technique Name":  "Kubernetes Exec Into Container",
        "Test #":  "2",
        "Test Name":  "Docker Exec Into Container",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1610",
        "Technique Name":  "Deploy a container",
        "Test #":  "1",
        "Test Name":  "Deploy Docker container",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1612",
        "Technique Name":  "Build Image on Host",
        "Test #":  "1",
        "Test Name":  "Build Image On Host",
        "Executor Name":  "sh"
    }
]
;
