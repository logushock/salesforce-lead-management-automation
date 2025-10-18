
trigger LeadTrigger on Lead (before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert || Trigger.isUpdate) {
            LeadAssignmentHandler.assignOwners(Trigger.new);
        }
    }
}
