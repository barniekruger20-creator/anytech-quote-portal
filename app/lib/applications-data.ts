
export interface ApplicationQuestion {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select' | 'number' | 'date' | 'email' | 'tel';
  required?: boolean;
  options?: string[];
  placeholder?: string;
}

export interface Application {
  id: string;
  name: string;
  description: string;
  icon: string;
  questions: ApplicationQuestion[];
}

export const applications: Application[] = [
  {
    id: 'conveyors',
    name: 'Conveyors',
    description: 'Belt, roller, chain, gravity, and modular conveyor systems',
    icon: 'conveyor-belt',
    questions: [
      { id: 'project_name', label: 'Project Name', type: 'text', required: true },
      { id: 'start_date', label: 'Expected Start Date', type: 'date', required: true },
      { id: 'completion_date', label: 'Expected Completion Date', type: 'date', required: true },
      { id: 'item_type', label: 'Item Type (e.g., boxes, pallets)', type: 'text', required: true },
      { id: 'item_weight', label: 'Item Weight (kg/lbs)', type: 'text', required: true },
      { id: 'item_dimensions', label: 'Item Dimensions (L×W×H)', type: 'text', required: true },
      { 
        id: 'conveyor_type', 
        label: 'Conveyor Type', 
        type: 'select', 
        required: true,
        options: ['Belt', 'Roller', 'Chain', 'Gravity', 'Modular']
      },
      { id: 'conveyor_length', label: 'Conveyor Length (m/ft)', type: 'text', required: true },
      { 
        id: 'layout_type', 
        label: 'Layout Type', 
        type: 'select', 
        required: true,
        options: ['Straight', 'Curved', 'Inclined', 'Declined']
      },
      { id: 'speed', label: 'Speed (m/s or m/min)', type: 'text', required: true },
      { id: 'throughput', label: 'Throughput (items/hour or pallets/hour)', type: 'text', required: true },
      { id: 'power_requirements', label: 'Power / Drive Requirements', type: 'textarea' },
      { id: 'load_handling', label: 'Load Handling Requirements', type: 'textarea' },
      { id: 'integration', label: 'Integration with existing lines or machines', type: 'textarea' },
      { id: 'environmental', label: 'Environmental conditions (temperature, dust, moisture)', type: 'textarea' },
      { id: 'safety', label: 'Safety requirements / guards / sensors', type: 'textarea' },
      { id: 'maintenance', label: 'Maintenance access / ergonomic considerations', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (CAD, drawings, photos)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'assembly_lines',
    name: 'Assembly Lines',
    description: 'Automated and semi-automated assembly line solutions',
    icon: 'factory',
    questions: [
      { id: 'product_type', label: 'Product Type / Variants', type: 'text', required: true },
      { id: 'components_per_unit', label: 'Components per Unit', type: 'number', required: true },
      { id: 'units_per_hour', label: 'Units per Hour', type: 'number', required: true },
      { 
        id: 'shift_patterns', 
        label: 'Shift Patterns', 
        type: 'select', 
        required: true,
        options: ['Single', 'Double', 'Triple']
      },
      { 
        id: 'automation_level', 
        label: 'Automation Level', 
        type: 'select', 
        required: true,
        options: ['Manual', 'Semi-Automatic', 'Fully Automatic']
      },
      { id: 'processes', label: 'Processes Included (Screwing, Gluing, Labeling, Inspection, Welding, Packaging)', type: 'textarea', required: true },
      { 
        id: 'layout_preference', 
        label: 'Layout Preference', 
        type: 'select', 
        required: true,
        options: ['Linear', 'U-shape', 'L-shape', 'Modular']
      },
      { id: 'operator_stations', label: 'Operator Stations', type: 'number', required: true },
      { id: 'utilities', label: 'Utilities Requirements (Power, Air, Water, Lubrication)', type: 'textarea' },
      { id: 'safety_compliance', label: 'Safety & Compliance (OSHA / local regulations)', type: 'textarea' },
      { id: 'material_handling', label: 'Material Handling between stations', type: 'textarea' },
      { id: 'control_monitoring', label: 'Control & monitoring requirements (PLC, sensors)', type: 'textarea' },
      { id: 'quality_inspection', label: 'Quality / inspection checks', type: 'textarea' },
      { id: 'maintenance_schedule', label: 'Maintenance schedule & access', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (Drawings, CAD files, photos)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'vertical_storage',
    name: 'Vertical Storage',
    description: 'Automated vertical storage and retrieval systems',
    icon: 'warehouse',
    questions: [
      { id: 'item_type', label: 'Item Type', type: 'text', required: true },
      { id: 'item_dimensions', label: 'Item Dimensions (L×W×H)', type: 'text', required: true },
      { id: 'item_weight', label: 'Item Weight', type: 'text', required: true },
      { id: 'total_quantity', label: 'Total Quantity', type: 'number', required: true },
      { 
        id: 'picking_method', 
        label: 'Picking Method', 
        type: 'select', 
        required: true,
        options: ['Manual', 'Semi-Automated', 'Fully Automated']
      },
      { id: 'throughput', label: 'Throughput (Items/hour)', type: 'number', required: true },
      { id: 'height_constraints', label: 'Height Constraints (m)', type: 'text' },
      { id: 'footprint_constraints', label: 'Footprint Constraints', type: 'text' },
      { 
        id: 'storage_material', 
        label: 'Material of Storage', 
        type: 'select',
        options: ['Steel', 'Aluminum', 'Other']
      },
      { id: 'environmental', label: 'Environmental Conditions (Temperature, Humidity, Dust)', type: 'textarea' },
      { id: 'erp_integration', label: 'Integration with ERP/WMS', type: 'textarea' },
      { id: 'safety_compliance', label: 'Safety & Compliance', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (Layout drawings, item photos, CAD files)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'agv',
    name: 'AGV (Automated Guided Vehicle)',
    description: 'Automated material transport vehicles',
    icon: 'truck',
    questions: [
      { id: 'material_type', label: 'Material Type to transport', type: 'text', required: true },
      { id: 'payload_weight', label: 'Payload Weight (kg/lbs)', type: 'text', required: true },
      { id: 'payload_dimensions', label: 'Payload Dimensions', type: 'text', required: true },
      { id: 'trips_per_hour', label: 'Trips per Hour', type: 'number', required: true },
      { id: 'operating_area', label: 'Operating Area Size (m²/ft²)', type: 'text', required: true },
      { 
        id: 'floor_type', 
        label: 'Floor Type', 
        type: 'select', 
        required: true,
        options: ['Concrete', 'Tiles', 'Inclines', 'Mixed']
      },
      { 
        id: 'navigation_type', 
        label: 'Navigation Type', 
        type: 'select', 
        required: true,
        options: ['Magnetic Tape', 'Laser', 'Vision', 'LIDAR']
      },
      { id: 'battery_charging', label: 'Battery & Charging Requirements', type: 'textarea' },
      { id: 'speed_acceleration', label: 'Speed & Acceleration', type: 'text' },
      { id: 'safety_systems', label: 'Obstacle Detection / Safety systems', type: 'textarea' },
      { id: 'integration', label: 'Integration with PLC/MES/WMS', type: 'textarea' },
      { id: 'environmental', label: 'Environmental conditions (temperature, dust, humidity)', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (Facility layout, CAD, product photos)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'amr',
    name: 'AMR (Autonomous Mobile Robot)',
    description: 'Autonomous mobile robots with advanced navigation',
    icon: 'robot',
    questions: [
      { id: 'material_type', label: 'Material Type to transport', type: 'text', required: true },
      { id: 'payload_weight', label: 'Payload Weight (kg/lbs)', type: 'text', required: true },
      { id: 'payload_dimensions', label: 'Payload Dimensions', type: 'text', required: true },
      { id: 'trips_per_hour', label: 'Trips per Hour', type: 'number', required: true },
      { id: 'operating_area', label: 'Operating Area Size (m²/ft²)', type: 'text', required: true },
      { id: 'floor_type', label: 'Floor Type', type: 'select', options: ['Concrete', 'Tiles', 'Inclines', 'Mixed'] },
      { id: 'navigation_type', label: 'Navigation Type', type: 'select', options: ['Laser', 'Vision', 'LIDAR', 'Hybrid'] },
      { id: 'battery_charging', label: 'Battery & Charging Requirements', type: 'textarea' },
      { id: 'environmental', label: 'Environmental conditions', type: 'textarea' },
      { id: 'dynamic_pathing', label: 'Dynamic Pathing Requirements', type: 'textarea', required: true },
      { 
        id: 'multi_robot', 
        label: 'Multi-Robot Coordination', 
        type: 'select', 
        required: true,
        options: ['Yes', 'No']
      },
      { id: 'obstacle_avoidance', label: 'Obstacle Avoidance Requirements', type: 'textarea', required: true },
      { id: 'charging_stations', label: 'Charging / docking station locations', type: 'textarea' },
      { id: 'communication', label: 'Communication protocol with central system', type: 'textarea' },
      { id: 'safety_zones', label: 'Safety zones / collision handling', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (Facility layout, CAD, product photos)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'jigs_fixtures',
    name: 'Jigs & Fixtures',
    description: 'Custom tooling and fixture solutions',
    icon: 'wrench',
    questions: [
      { id: 'part_details', label: 'Part/Component Details', type: 'textarea', required: true },
      { 
        id: 'operation_type', 
        label: 'Operation Type', 
        type: 'select', 
        required: true,
        options: ['Machining', 'Assembly', 'Inspection', 'Welding', 'Other']
      },
      { id: 'fixture_material', label: 'Material of Fixture', type: 'text', required: true },
      { id: 'quantity', label: 'Quantity to Produce', type: 'number', required: true },
      { id: 'cycle_time', label: 'Cycle Time per Operation (seconds)', type: 'number', required: true },
      { id: 'tolerances', label: 'Tolerances / Precision Requirements', type: 'textarea', required: true },
      { id: 'clamping', label: 'Special Clamping / Ergonomic Requirements', type: 'textarea' },
      { id: 'safety_compliance', label: 'Safety & Compliance', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (CAD, sketches)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'purpose_built',
    name: 'Purpose-Built Machines',
    description: 'Custom machinery and specialized equipment',
    icon: 'cog',
    questions: [
      { id: 'machine_purpose', label: 'Machine Purpose / Operation', type: 'textarea', required: true },
      { id: 'product_details', label: 'Product Details', type: 'textarea', required: true },
      { id: 'throughput', label: 'Throughput / Production Capacity (Units/hour)', type: 'number', required: true },
      { 
        id: 'automation_level', 
        label: 'Automation Level', 
        type: 'select', 
        required: true,
        options: ['Manual', 'Semi-Automated', 'Fully Automated']
      },
      { id: 'layout_constraints', label: 'Layout / Space Constraints', type: 'textarea' },
      { id: 'utilities', label: 'Utilities Required (Power, Air, Water, Coolant)', type: 'textarea' },
      { id: 'safety_compliance', label: 'Safety & Compliance', type: 'textarea' },
      { id: 'integration', label: 'Integration Requirements (PLC, MES, existing machines)', type: 'textarea' },
      { id: 'maintenance', label: 'Maintenance / accessibility requirements', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (CAD, sketches, drawings)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'robotics',
    name: 'Robotics',
    description: 'Industrial robotic systems and automation',
    icon: 'bot',
    questions: [
      { 
        id: 'robot_type', 
        label: 'Robot Type', 
        type: 'select', 
        required: true,
        options: ['Articulated', 'SCARA', 'Delta', 'Collaborative']
      },
      { id: 'payload_weight', label: 'Payload Weight', type: 'text', required: true },
      { id: 'reach', label: 'Reach (m)', type: 'text', required: true },
      { id: 'axes', label: 'Number of Axes', type: 'number', required: true },
      { id: 'precision', label: 'Precision & Repeatability', type: 'text', required: true },
      { 
        id: 'end_effector', 
        label: 'End Effector Type', 
        type: 'select', 
        required: true,
        options: ['Gripper', 'Welder', 'Suction', 'Custom']
      },
      { id: 'cycle_time', label: 'Cycle Time / Operations per Hour', type: 'text', required: true },
      { id: 'integration', label: 'Integration with conveyor / line', type: 'textarea' },
      { 
        id: 'safety_type', 
        label: 'Safety Requirements', 
        type: 'select', 
        required: true,
        options: ['Caged', 'Collaborative']
      },
      { id: 'attachments', label: 'Attachments (Layouts, CAD, 3D models)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'control_panels',
    name: 'Control Panels',
    description: 'Electrical control systems and panels',
    icon: 'settings',
    questions: [
      { id: 'panel_count', label: 'Number of Panels', type: 'number', required: true },
      { 
        id: 'purpose', 
        label: 'Purpose', 
        type: 'select', 
        required: true,
        options: ['PLC', 'Drives', 'Sensors', 'Power Distribution', 'Mixed']
      },
      { id: 'voltage_current', label: 'Voltage / Current Requirements', type: 'text', required: true },
      { 
        id: 'components', 
        label: 'Components', 
        type: 'select', 
        required: true,
        options: ['Siemens', 'ABB', 'Allen-Bradley', 'Schneider', 'Other']
      },
      { id: 'environmental', label: 'Environmental Conditions (Indoor/Outdoor, IP rating)', type: 'text', required: true },
      { id: 'integration', label: 'Integration with machines / network', type: 'textarea' },
      { id: 'hmi_monitoring', label: 'HMI / Monitoring Needs', type: 'textarea' },
      { id: 'safety_compliance', label: 'Safety & Compliance', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (Schematics, wiring diagrams)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  },
  {
    id: 'packaging_lines',
    name: 'Packaging Lines',
    description: 'Automated packaging and labeling systems',
    icon: 'package',
    questions: [
      { id: 'product_packaging', label: 'Product Type & Packaging (Bottles, Cartons, Bags, Pouches)', type: 'text', required: true },
      { id: 'package_dimensions', label: 'Package Dimensions & Weight (L×W×H, kg/lbs)', type: 'text', required: true },
      { id: 'line_speed', label: 'Line Speed / Units per Hour', type: 'number', required: true },
      { id: 'stations', label: 'Number of Stations', type: 'number', required: true },
      { 
        id: 'automation_level', 
        label: 'Automation Level', 
        type: 'select', 
        required: true,
        options: ['Manual', 'Semi-Automated', 'Fully Automated']
      },
      { id: 'utilities', label: 'Utilities Required (Air, Electricity, Vacuum, Heat)', type: 'textarea' },
      { id: 'labeling', label: 'Labeling / Printing Requirements', type: 'textarea' },
      { id: 'integration', label: 'Integration with upstream / downstream lines', type: 'textarea' },
      { id: 'safety_hygiene', label: 'Safety & Hygiene Standards', type: 'textarea' },
      { id: 'attachments', label: 'Attachments (Layouts, CAD, Photos)', type: 'textarea', placeholder: 'Please describe any attachments you will provide separately' }
    ]
  }
];

export interface ClientInfo {
  clientName: string;
  email: string;
  phone: string;
  industry: string;
  company: string;
}

export interface FormData {
  clientInfo: ClientInfo;
  selectedApplication: string;
  applicationAnswers: Record<string, string>;
}
