export async function GET() {
  const tickets = [
    { id: 't-1001', title: 'Cannot connect to VPN', description: 'User reports intermittent VPN connectivity errors.', priority: 'High', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T14:05:00Z' },
    { id: 't-1002', title: 'Email sync delayed', description: 'Shared mailbox syncing slowly on Outlook.', priority: 'Medium', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T13:30:00Z' },
    { id: 't-1003', title: 'Laptop battery draining', description: 'Battery dies in under 1 hour after full charge.', priority: 'High', status: 'In Progress', assignee: 'Jess', updatedAt: '2025-10-31T12:10:00Z' },
    { id: 't-1004', title: 'Printer offline (Floor 3)', description: 'Network printer not discoverable by users.', priority: 'Medium', status: 'On Hold', assignee: 'Unassigned', updatedAt: '2025-10-30T18:22:00Z' },
    { id: 't-1005', title: 'Password reset loop', description: 'After reset, user is prompted to reset again.', priority: 'Low', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T09:15:00Z' },
    { id: 't-1006', title: 'Wi-Fi drops in conference room', description: 'Devices disconnect every 20 minutes.', priority: 'Medium', status: 'Open', assignee: 'Sam', updatedAt: '2025-10-31T08:54:00Z' },
    { id: 't-1007', title: 'New hire onboarding', description: 'Provision accounts and laptop for new hire.', priority: 'Low', status: 'In Progress', assignee: 'Nina', updatedAt: '2025-10-29T15:37:00Z' },
    { id: 't-1008', title: 'SSO not redirecting', description: 'Login screen loops after SSO redirect attempt.', priority: 'High', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T10:44:00Z' },
    { id: 't-1009', title: 'CRM timeout', description: 'Pages take >30s to load, frequent timeouts.', priority: 'Critical', status: 'Open', assignee: 'Alex', updatedAt: '2025-10-31T10:58:00Z' },
    { id: 't-1010', title: 'Slack notifications missing', description: 'Desktop app not showing badge counts.', priority: 'Low', status: 'Resolved', assignee: 'Jess', updatedAt: '2025-10-28T17:05:00Z' },
    { id: 't-1011', title: 'MacOS update blocked', description: 'Company portal blocks update despite approval.', priority: 'Medium', status: 'On Hold', assignee: 'Unassigned', updatedAt: '2025-10-30T19:40:00Z' },
    { id: 't-1012', title: 'Zoom microphone echo', description: 'Echo heard by remote participants.', priority: 'Low', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T07:51:00Z' },
    { id: 't-1013', title: 'Access request to finance drive', description: 'User needs read access to /Finance/Q4.', priority: 'Medium', status: 'Open', assignee: 'Nina', updatedAt: '2025-10-31T09:47:00Z' },
    { id: 't-1014', title: '2FA codes delayed', description: 'SMS codes sometimes arrive after 5 minutes.', priority: 'High', status: 'In Progress', assignee: 'Sam', updatedAt: '2025-10-31T11:03:00Z' },
    { id: 't-1015', title: 'SharePoint permissions broken', description: 'Owners cannot grant access to new users.', priority: 'High', status: 'Open', assignee: 'Alex', updatedAt: '2025-10-31T10:12:00Z' },
    { id: 't-1016', title: 'Endpoint agent missing', description: 'Security agent not reporting for some devices.', priority: 'Critical', status: 'Open', assignee: 'Unassigned', updatedAt: '2025-10-31T06:55:00Z' }
  ];

  return Response.json(tickets);
}