import express from 'express';
import { DataRule, LgvInstance, lgv_value, process_rules } from './rules';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(run_rules());
});

app.get('/r', (req, res) => {
    res.send('Hello Woddrrld!');
});

app.get('/rules/', (req, res) => {
})

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});


function run_rules() {
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
    return satisfied
} 