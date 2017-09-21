
export interface Change {
    id: number;
    ChangeNumber: string;
    CategorySymbol: string;
    ReportedByComboName: string;
    AffectedContactComboName: string;
    Summary: string;
    Description: string;
    OrganizationName: string;
    Status: string;
    StatusReason: string;
    Assignee: string;
    GroupName: string;
    OpenDate: Date;
    Risk: string;
    Impact: string;
    ChangeType: string;
    ScheduleStartDate: Date;
    ScheduleEndDate: Date;
    ActualStartDate: Date;
    ActualEndDate: Date;
    BusinessJustification: string;
    TestPlan: string;
    TestResultsAndOutcomes: string;
    UatSignOff: string;
    DowntimeSummary: string;
}