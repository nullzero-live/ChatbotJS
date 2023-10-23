```mermaid
graph TD
  subgraph Test_Automation_Suite
    A1[Start Test] -->|Execute Test Cases| A2[Generate Test Logs]
    A2 -->|Export Logs| A3[Logstash]
  end
  
  subgraph ELK_Stack
    A3 -->|Parse & Index| A4[Elasticsearch]
    A4 -->|Visualize Basic Data| A5[Kibana]
  end

  subgraph External_Analytics_Unit
    A4 -.->|Asynchronous Call| B1[Analytics Service]
    B1 -->|Analyze with Offline ML| B2[Offline ML Model]
    B2 -->|Generate Insights| B3[Dashboard]
  end
  
  subgraph Reporting_Module
    A5 -->|View Basic Metrics| R1
    B3 -->|View Advanced Insights| R2
    B3 -->|View Strategic Insights| R3
  end
  
  subgraph Authorization_Levels
    C1[QA Team]
    C2[Dev Team]
    C3[Management]
    C1 -->|Basic Reports| R1
    C2 -->|Basic & Advanced Reports| R1,R2
    C3 -->|All Reports| R1,R2,R3
  end
  ```
  
  
