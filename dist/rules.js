"use strict";
/*
    Events
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.lgv_value = exports.lgv_values = exports.process_aggregates = exports.process_rules = void 0;
// returns the rules that are satisfied
function process_rules(rules, lgvs) {
    function process_rule(rule, lgv) {
        // TODO
        return rule;
    }
    return rules.filter(rule => process_rule(rule, lgvs) != null);
}
exports.process_rules = process_rules;
// === Aggregates/Measures
// returns the rules that are satisfied
function process_aggregates(rules, lgvs) {
    function process_aggregate(rule, lgv) {
        // TODO 
        return rule;
    }
    return rules.filter(rule => process_aggregate(rule, lgvs) != null);
}
exports.process_aggregates = process_aggregates;
// Helper functions
// Return type is multiple types 
function lgv_values(lgv_name, lgvs, user_id) {
    return lgvs.filter(lgv => lgv.user_id === user_id && lgv.name === lgv_name)
        .map(lgv => lgv.value);
}
exports.lgv_values = lgv_values;
function lgv_value(lgv_name, lgvs, user_id) {
    return lgvs.filter(lgv => lgv.user_id === user_id && lgv.name === lgv_name)
        .map(lgv => lgv.value);
}
exports.lgv_value = lgv_value;
//# sourceMappingURL=rules.js.map