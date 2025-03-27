 **Version: 1.0.6623**
 **Build date: 26/03/2025**
## Release_1.0.6623 

# **Release Notes: Traxsense 2025 Q1**

---

## **Overview**  
The Traxsense Q1 2025 release focuses on enhancing platform reliability, improving cross-platform compatibility, and refining user experiences across item management, portal monitoring, and consumer instance handling. Key updates include performance optimizations, export functionalities, MQTT consumer support, image and event handling enhancements, and UI improvements.

---

## **Features**  
### **1. MQTT and Event Processing**  
- Added R700 MQTT Consumer for processing RFID tag inventory.  
- Implemented R700-specific topic type handling and active filtering for consumer pages.  
- Standardized EventModel for streamlined event processing and added template files for email and notifications.

### **2. Item and User Management Enhancements**  
- **Export Functionality:** Added .xlsx download capability for item management.  
- **Photo Library Updates:** Import photos from directories and display user images and item avatars.  
- Refactored item status registration logic for smoother navigation and error handling.

### **3. Portal Monitoring and Personal Tracking**  
- Improved proximity tag handling with asynchronous fetching and null checks to prevent errors.  
- Added order-by-time logic for personal monitoring and optimized tag inventory event handling.

### **4. Route and Waypoint Management**  
- Implemented multi-waypoint selection for vehicle route management with updated route handling functions.

### **5. Cross-Platform Compatibility and Dockerization**  
- Enhanced cross-platform support by addressing unnamed memory-mapped file limitations on Linux/macOS.  
- Added Docker Compose file for containerized testing of Eventbridge and Traxsense components.

### **6. UI Enhancements and Branding**  
- Updated datatables to sort by “last seen” and refresh dynamically.  
- Added Traxsense logo to Eventbridge and refined project file linking for asset inclusion.  
- Improved CSS classes for image rendering and placeholder avatars.

---

## **Fixes**  
- Resolved cross-platform issues with memory-mapped files and HTML references.  
- Fixed incorrect routing to item history and unassigned portal monitoring.  
- Addressed issues in ItemService and related test cases.  
- Removed unused fields and streamlined code to reduce redundancy.  
- Fixed template references for email notifications.

---

## **Improvements**  
- Optimized CPU usage by throttling the message receive interval.  
- Enhanced performance by reducing unnecessary location queries and handling stopping tokens during background tasks.  
- Refactored consumer classes and helper methods for improved clarity and maintainability.  
- Improved logging for email notifications and event publishing to enhance debugging and traceability.  
- Consolidated release notes and reduced detailed descriptions to link users to the Updates Page for easy navigation.  

---

This release reflects Traxsense’s ongoing commitment to providing a robust, scalable, and user-friendly tracking and management system for enterprise applications.


