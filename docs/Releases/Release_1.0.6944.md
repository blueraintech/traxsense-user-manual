**Version: 1.0.6499**  
**Build date: 28/10/2025**  
## Release_1.0.6499

# **Release Notes: Traxsense 2025 Q4.1**

---

## **Overview**  
This release introduces significant enhancements to location management, device tracking capabilities, and flow management systems. Key highlights include improved real-time tracking with SignalR integration, enhanced device status monitoring, and expanded support for custom beacon models.

---

## **Features**  
- Added location coordinates display in location view with latitude and longitude integration
- Implemented device list functionality within location views for better asset management
- Introduced real-time proximity tag updates through ProximityHub
- Added SignalR integration for live data webhook capabilities
- Created comprehensive LiveTracking Service with dedicated item tracking endpoints
- Implemented device caching in live tracking service for improved performance
- Added support for CustomMoko and CustomMinew beacon models
- Introduced Custom Flow type to utilize all available fragments
- Added StepFunction indicators for Scan, Action, Submit, and Tag types

---

## **Fixes**  
- Fixed battery status reporting for TAK03-54 devices
- Corrected Device status transaction logging issues
- Updated battery property references to BatteryPercentage for Moko and Minew manufacturers
- Fixed FlowStepViewModel MetaData naming inconsistencies
- Resolved duplicate IP feedback message handling
- Fixed filter functionality for flow step type by platform type

---

## **Improvements**
- Enhanced status icon indicators for both devices and users
- Improved task status descriptions in task view with metadata parsing
- Updated color scale system for better visual consistency
- Enhanced search functionality to enable searching across all item tags
- Refactored location controller code to service and repository pattern
- Improved flow management with adhoc and step count columns
- Updated Flow Step controls for better user experience
- Refactored RfidR700MqttConsumer to use R700Status for device status updates
- Enhanced Portal Monitor styling and SignalR integration

---

**This release significantly improves the real-time tracking capabilities and user experience while maintaining system stability and performance.**