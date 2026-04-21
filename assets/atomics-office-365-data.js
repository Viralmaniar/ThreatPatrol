window.ATOMICS_OFFICE_365_DATA = [
    {
        "Tactic":  "collection",
        "Technique #":  "T1114.003",
        "Technique Name":  "Email Collection: Email Forwarding Rule",
        "Test #":  "1",
        "Test Name":  "Office365 - Email Forwarding",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "collection",
        "Technique #":  "T1114.002",
        "Technique Name":  "Email Collection: Remote Email Collection",
        "Test #":  "1",
        "Test Name":  "Office365 - Remote Mail Collected",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1564.008",
        "Technique Name":  "Hide Artifacts: Email Hiding Rules",
        "Test #":  "1",
        "Test Name":  "New-Inbox Rule to Hide E-mail in M365",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "3",
        "Test Name":  "Office 365 - Exchange Audit Log Disabled",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "defense-evasion",
        "Technique #":  "T1562.008",
        "Technique Name":  "Impair Defenses: Disable Cloud Logs",
        "Test #":  "9",
        "Test Name":  "Office 365 - Set Audit Bypass For a Mailbox",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "persistence",
        "Technique #":  "T1098.002",
        "Technique Name":  "Account Manipulation: Additional Email Delegate Permissions",
        "Test #":  "1",
        "Test Name":  "EXO - Full access mailbox permission granted to a user",
        "Executor Name":  "powershell"
    },
    {
        "Tactic":  "privilege-escalation",
        "Technique #":  "T1098.002",
        "Technique Name":  "Account Manipulation: Additional Email Delegate Permissions",
        "Test #":  "1",
        "Test Name":  "EXO - Full access mailbox permission granted to a user",
        "Executor Name":  "powershell"
    }
]
;
