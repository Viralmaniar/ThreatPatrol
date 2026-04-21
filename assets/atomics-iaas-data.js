window.ATOMICS_IAAS_DATA = [
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.001",
        "Technique Name":  "Impair Defenses: Disable or Modify Tools",
        "Test #":  "46",
        "Test Name":  "AWS - GuardDuty Suspension or Deletion",
        "Executor Name":  "bash"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "1",
        "Test Name":  "AWS - CloudTrail Changes",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "2",
        "Test Name":  "Azure - Eventhub Deletion",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "4",
        "Test Name":  "AWS - Disable CloudTrail Logging Through Event Selectors using Stratus",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "5",
        "Test Name":  "AWS - CloudTrail Logs Impairment Through S3 Lifecycle Rule using Stratus",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "6",
        "Test Name":  "AWS - Remove VPC Flow Logs using Stratus",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "7",
        "Test Name":  "AWS - CloudWatch Log Group Deletes",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "8",
        "Test Name":  "AWS CloudWatch Log Stream Deletes",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "10",
        "Test Name":  "GCP - Delete Activity Event Log",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1578.001",
        "Technique Name":  "Modify Cloud Compute Infrastructure: Create Snapshot",
        "Test #":  "1",
        "Test Name":  "AWS - Create Snapshot from EBS Volume",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1578.001",
        "Technique Name":  "Modify Cloud Compute Infrastructure: Create Snapshot",
        "Test #":  "2",
        "Test Name":  "Azure - Create Snapshot from Managed Disk",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1578.001",
        "Technique Name":  "Modify Cloud Compute Infrastructure: Create Snapshot",
        "Test #":  "3",
        "Test Name":  "GCP - Create Snapshot from Persistent Disk",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "1",
        "Test Name":  "Creating GCP Service Account and Service Account Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "2",
        "Test Name":  "Azure Persistence Automation Runbook Created or Modified",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "3",
        "Test Name":  "GCP - Create Custom IAM Role",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1552.005",
        "Technique Name":  "Unsecured Credentials: Cloud Instance Metadata API",
        "Test #":  "2",
        "Test Name":  "Azure - Dump Azure Instance Metadata from Virtual Machines",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1552",
        "Technique Name":  "Unsecured Credentials",
        "Test #":  "1",
        "Test Name":  "AWS - Retrieve EC2 Password Data using stratus",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1110.003",
        "Technique Name":  "Brute Force: Password Spraying",
        "Test #":  "9",
        "Test Name":  "AWS - Password Spray an AWS using GoAWSConsoleSpray",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1528",
        "Technique Name":  "Steal Application Access Token",
        "Test #":  "1",
        "Test Name":  "Azure - Functions code upload - Functions code injection via Blob upload",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1528",
        "Technique Name":  "Steal Application Access Token",
        "Test #":  "2",
        "Test Name":  "Azure - Functions code upload - Functions code injection via File Share modification to retrieve the Functions identity access token",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "credential-access",
        "Technique #":  "T1555.006",
        "Technique Name":  "Credentials from Password Stores: Cloud Secrets Management Stores",
        "Test #":  "1",
        "Test Name":  "Azure - Dump All Azure Key Vaults with Microburst",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "impact",
        "Technique #":  "T1485",
        "Technique Name":  "Data Destruction",
        "Test #":  "4",
        "Test Name":  "GCP - Delete Bucket",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1580",
        "Technique Name":  "Cloud Infrastructure Discovery",
        "Test #":  "1",
        "Test Name":  "AWS - EC2 Enumeration from Cloud Instance",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1580",
        "Technique Name":  "Cloud Infrastructure Discovery",
        "Test #":  "2",
        "Test Name":  "AWS - EC2 Security Group Enumeration",
        "Executor Name":  "command_prompt"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1619",
        "Technique Name":  "Cloud Storage Object Discovery",
        "Test #":  "1",
        "Test Name":  "AWS S3 Enumeration",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1619",
        "Technique Name":  "Cloud Storage Object Discovery",
        "Test #":  "2",
        "Test Name":  "Azure - Enumerate Storage Account Objects via Shared Key authorization using Azure CLI",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1619",
        "Technique Name":  "Cloud Storage Object Discovery",
        "Test #":  "3",
        "Test Name":  "Azure - Scan for Anonymous Access to Azure Storage (Powershell)",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1619",
        "Technique Name":  "Cloud Storage Object Discovery",
        "Test #":  "4",
        "Test Name":  "Azure - Enumerate Azure Blobs with MicroBurst",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1201",
        "Technique Name":  "Password Policy Discovery",
        "Test #":  "12",
        "Test Name":  "Examine AWS Password Policy",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1526",
        "Technique Name":  "Cloud Service Discovery",
        "Test #":  "1",
        "Test Name":  "Azure - Dump Subscription Data with MicroBurst",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1526",
        "Technique Name":  "Cloud Service Discovery",
        "Test #":  "2",
        "Test Name":  "AWS - Enumerate common cloud services",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "discovery",
        "Technique #":  "T1526",
        "Technique Name":  "Cloud Service Discovery",
        "Test #":  "3",
        "Test Name":  "Azure - Enumerate common cloud services",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "collection",
        "Technique #":  "T1530",
        "Technique Name":  "Data from Cloud Storage Object",
        "Test #":  "1",
        "Test Name":  "AWS - Scan for Anonymous Access to S3",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "collection",
        "Technique #":  "T1530",
        "Technique Name":  "Data from Cloud Storage Object",
        "Test #":  "2",
        "Test Name":  "Azure - Dump Azure Storage Account Objects via Azure CLI",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1098.001",
        "Technique Name":  "Account Manipulation: Additional Cloud Credentials",
        "Test #":  "3",
        "Test Name":  "AWS - Create Access Key and Secret Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1136.003",
        "Technique Name":  "Create Account: Cloud Account",
        "Test #":  "1",
        "Test Name":  "AWS - Create a new IAM user",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "3",
        "Test Name":  "AWS - Create a group and add a user to that group",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "6",
        "Test Name":  "Azure - adding user to Azure role in subscription",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "7",
        "Test Name":  "Azure - adding service principal to Azure role in subscription",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "17",
        "Test Name":  "GCP - Delete Service Account Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "1",
        "Test Name":  "Creating GCP Service Account and Service Account Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "2",
        "Test Name":  "Azure Persistence Automation Runbook Created or Modified",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "3",
        "Test Name":  "GCP - Create Custom IAM Role",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1098.001",
        "Technique Name":  "Account Manipulation: Additional Cloud Credentials",
        "Test #":  "3",
        "Test Name":  "AWS - Create Access Key and Secret Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "3",
        "Test Name":  "AWS - Create a group and add a user to that group",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "6",
        "Test Name":  "Azure - adding user to Azure role in subscription",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "7",
        "Test Name":  "Azure - adding service principal to Azure role in subscription",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1098",
        "Technique Name":  "Account Manipulation",
        "Test #":  "17",
        "Test Name":  "GCP - Delete Service Account Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "1",
        "Test Name":  "Creating GCP Service Account and Service Account Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "2",
        "Test Name":  "Azure Persistence Automation Runbook Created or Modified",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "3",
        "Test Name":  "GCP - Create Custom IAM Role",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "initial-access",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "1",
        "Test Name":  "Creating GCP Service Account and Service Account Key",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "initial-access",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "2",
        "Test Name":  "Azure Persistence Automation Runbook Created or Modified",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "initial-access",
        "Technique #":  "T1078.004",
        "Technique Name":  "Valid Accounts: Cloud Accounts",
        "Test #":  "3",
        "Test Name":  "GCP - Create Custom IAM Role",
        "Executor Name":  "sh"
    },
    {
        "Tactic":  "execution",
        "Technique #":  "T1651",
        "Technique Name":  "Cloud Administration Command",
        "Test #":  "1",
        "Test Name":  "AWS Run Command (and Control)",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "execution",
        "Technique #":  "T1648",
        "Technique Name":  "Serverless Execution",
        "Test #":  "1",
        "Test Name":  "Lambda Function Hijack",
        "Executor Name":  "powershell"
    }
]
;
