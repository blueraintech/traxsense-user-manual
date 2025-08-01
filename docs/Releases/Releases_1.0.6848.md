**Version: 1.0.6848**  
**Build date: 01/08/2025**  
## Release_1.0.6848  

# **Release Notes: Traxsense 2025 Q3**

---

## **Overview**  
The Traxsense Q3 2025 release introduces significant updates to improve system performance, enhance user experience, and expand functionality across multiple modules. Key highlights include streamlined condition logging, refined UI components, optimized background services, and expanded integration capabilities.

---

## **Features**  
### **1. Condition Logging and Rule Engine Integration**  
- Added `TagConditionLog` table and server-side condition log service.  
- Integrated BLE tag condition triggers into the rule engine.  
- Enhanced ActiveRFID Tag Consumer to handle `TagCondition`.  
- Added `TagConditionValueEqualTo` to dropdown options for condition handling.

### **2. User and Item Management Enhancements**  
- **Soft Delete Functionality:** Users can now be soft-deleted and marked inactive for tracking purposes.  
- Added column to track user status.  
- Refactored item manager component with improved HTML structure and added copy button functionality.  
- Enhanced device manager with clipboard features for device ID, MAC, and location fields.  
- Added clear filters functionality to task management for easier navigation.

### **3. Portal Monitoring and Alerts**  
- Updated portal behavior for clearer indication of events.  
- Improved alerts and incidents with badge indicators.  
- Adjusted timing on portal monitor for better responsiveness.

### **4. Route and Vehicle Management**  
- Refactored route and vehicle route management components with standardized table formatting and enhanced loading indicators.

### **5. UI Enhancements and Branding**  
- Added icons across multiple modules, including item management, user settings, and dashboard.  
- Updated styling on settings page and standardized table formatting.  
- Added tooltips and updated button icons for improved usability.

### **6. Integration and Pipeline Updates**  
- Added SignalR integration to Eventbridge for service dependencies.  
- Updated pipeline script to use Chrome for reduced memory usage.  
- Refactored .NET SDK installation steps and added support for SDK versions 6 and 8.  

---

## **Fixes**  
- Resolved CORS and negotiation issues in SignalR pipeline.  
- Fixed inefficient background services for alerts and incidents.  
- Removed unused fields and redundant code across multiple modules.  
- Addressed validation errors in integration methods.  
- Fixed indentation and formatting issues in pipeline scripts.

---

## **Improvements**  
- Optimized memory usage by logging memory-mapped file counts.  
- Enhanced performance by consolidating query logic and simplifying pattern matching.  
- Improved logging for debugging and traceability in condition services.  
- Refactored multiple components for maintainability and readability, including `ItemTransactionLogService` and `FragmentService`.  
- Added migration for `TagConditionLog` and updated related models and endpoints.  

---

This release underscores Traxsense’s commitment to delivering a scalable, efficient, and user-friendly platform for enterprise tracking and management solutions.