**Version: 1.0.6916**  
**Build date: 01/10/2025**  
## Release_1.0.6916

# **Release Notes: Traxsense 2025 Q3.1**

---

## **Overview**  
This release brings major improvements to user management, item and device handling, incident filtering, and overall system reliability. It introduces new features, optimizes background services, and enhances the user interface for better clarity and usability.

---

## **Features**  
- Added alert notification and fallback image when adding fails.
- Added badges for alerts and incidents.
- New indicator for improved status visibility.
- User status tracking and soft delete for users.
- Duplicate username detection and notification.
- Optimized bulk delete and rebuilt bulk importer with batching.
- New tag condition types and rule engine integration.
- Tag change trigger consumer and type added.
- Device lastSeen property and updated device data table.
- Enhanced device update handling.
- Item type template name column and filter.
- Updated item status delete UI and prevented assignment of deleted statuses.
- Status deleted column added.
- Unknown items property and datatable in task view model.
- Improved task history entry creation.
- Enhanced incident filtering.

---

## **Fixes**  
- Resolved CORS and negotiation issues with SignalR.
- Mocked GamapiService in tests to prevent real SignalR connections.
- Mocked GamapiService methods to return Observables in tests.
- Updated pipeline script to use Chrome for reduced memory usage.
- Fixed ItemStatus class for correct Deleted property.
- Ensured latest device updates via TXS Web.
- Fixed context null reference for item image ID.
- Improved item metadata edit dropdown lists.
- Updated error handling and test error messages.
- Removed unused imports, logs, and injections.
- Resolved naming conventions and formatting issues.

---

## **Improvements**
- Updated icons for unassigned items.
- Tab formatting enabled and action types formatted.
- Improved formatting and spacing throughout the codebase.
- Added guard clauses and mock data in tests.
- Reordered usings, updated field properties, and encapsulated members.
- Set classes to static where appropriate and updated readonly properties.
- Separated validation from importing.
- Removed log consumer not configured to prevent log spam.
- Enhanced background service efficiency for incidents and alerts.

---

**Thank you for using Traxsense. We are committed to continuous improvement and delivering a reliable, user-friendly experience. For feedback or support, please contact our team.**