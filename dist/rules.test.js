"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @jest-environment node
*/
const rules_1 = require("./rules");
test("rule/current_stress_level", () => {
    let lgvs = [
        {
            user_id: "001",
            name: "daily_activity_count",
            value: 3
        },
        {
            user_id: "001",
            name: "weekly_average_activity_count",
            value: 3.2
        },
        {
            user_id: "001",
            name: "current_stress_level",
            value: 30
        }
    ];
    let dataRules = [
        {
            name: "Current Stress Level",
            lgvInstances: lgvs,
            implementation: [
                {
                    implementation: ((lgvs, user_id) => { return (0, rules_1.lgv_value)('daily_activity_count', lgvs, user_id) < (0, rules_1.lgv_value)('weekly_average_activity_count', lgvs, user_id); }),
                    on_success: ((lgvs, user_id) => {
                        return [];
                    }),
                },
            ]
        },
    ];
    let instances = [{
            name: "current_stress_level",
            value: 40
        }];
    let user_id = "001";
    let satisfied = (0, rules_1.process_rules)(dataRules, lgvs);
    expect(satisfied).toHaveLength(3);
});
//# sourceMappingURL=rules.test.js.map