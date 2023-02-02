"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rules_1 = require("./rules");
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send(run_rules());
});
app.get('/r', (req, res) => {
    res.send('Hello Woddrrld!');
});
app.get('/rules/', (req, res) => {
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
function run_rules() {
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
    return satisfied;
}
//# sourceMappingURL=app.js.map