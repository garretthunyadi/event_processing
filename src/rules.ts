/*
    Events
*/

// import { Lgv } from "hpml/hpml"
// import { isObject } from "../Utils/utils"
// import { Skinnable } from "./strict_yarn"
// import { MediaAction } from "./sugar_yarn"
export type Lgv = {
    name: string
    type: LgvType
    default?: string
}
export type LgvType = 'str' | 'bool' | 'date' | 'int' | 'float' | 'list'

export type LgvInstance = {
    user_id?: string
    name: string,
    value: any, // TODO: TS for member of LgvType
}


export type PredicateOperator = 'LESS_THAN' | 'GREATER_THAN' | 'LESS_THAN_OR_EQUAL' | 'GREATER_THAN_OR_EQUAL' | 'EQUAL'

export type DataRule = {
    name: string
    // lgv?: Lgv
    // expression?: string
    // predicate_operator: PredicateOperator
    // predicate_value: number
    // predicate?: string //| ??
    lgvInstances: LgvInstance[],
    implementation: DataRuleImplementation[],
    // measureRules: MeasureRule[] // AggregateRule, MeasureRule?
}

/*

*/
export type DataRuleImplementation = {
    implementation: ((lgvs: LgvInstance[], user_id: string) => boolean),
    on_success: ((lgvs: LgvInstance[], user_id: string) => LgvInstance[]), // these instances should be updated in the system
}

export type MeasureRule = {
    lgv: Lgv
    adjustment: number
}


// returns the rules that are satisfied
export function process_rules(rules: DataRule[], lgvs: LgvInstance[]): DataRule[] {
    function process_rule(rule: DataRule, lgv: LgvInstance[]): DataRule {
        // TODO
        return rule
    }

    return rules.filter(rule => process_rule(rule, lgvs) != null)
}

// === Aggregates/Measures

// returns the rules that are satisfied
export function process_aggregates(rules: MeasureRule[], lgvs: LgvInstance[]): MeasureRule[] {
    function process_aggregate(rule: MeasureRule, lgv: LgvInstance[]): MeasureRule {
        // TODO 
        return rule
    }

    return rules.filter(rule => process_aggregate(rule, lgvs) != null)
}

// Helper functions

// Return type is multiple types 
export function lgv_values(lgv_name: string, lgvs: LgvInstance[], user_id: string): (number | string)[] {
    return lgvs.filter(lgv => lgv.user_id === user_id && lgv.name === lgv_name)
        .map(lgv => lgv.value)
}
export function lgv_value(lgv_name: string, lgvs: LgvInstance[], user_id: string): (number | string)[] {
    return lgvs.filter(lgv => lgv.user_id === user_id && lgv.name === lgv_name)
        .map(lgv => lgv.value)
}
