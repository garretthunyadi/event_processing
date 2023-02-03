/**
* @jest-environment node
*/
import { DataRule, LgvInstance, lgv_value, process_rules } from './rules';


test("rule/current_stress_level", () => {
    let lgvs: LgvInstance[] = [
        {
            user_id: "001",
            name: "daily_activity_count", // TODO will need to do the aggrigation over weeks
            value: 3
        },
        {
            user_id: "001",
            name: "weekly_average_activity_count", // TODO will need to do the aggrigation over weeks
            value: 3.2
        },
        {
            user_id: "001",
            name: "current_stress_level", // 1-100
            value: 30
        }
    ]


    let dataRules: DataRule[] = [
        {
            name: "Current Stress Level",
            lgvInstances: lgvs,
            implementation: [
                {
                    implementation: ((lgvs: LgvInstance[], user_id: string) => { return lgv_value('daily_activity_count', lgvs, user_id) < lgv_value('weekly_average_activity_count', lgvs, user_id) }),
                    on_success: ((lgvs: LgvInstance[], user_id: string) => {
                        return []
                    }),

                },

            ]
        },
    ]


    let instances: LgvInstance[] = [{
        name: "current_stress_level",
        value: 40
    }]

    let user_id = "001"
    let satisfied = process_rules(dataRules, lgvs)
    expect(satisfied).toHaveLength(1)
})