// Copyright (c) 2024, Ravi Gokhale and contributors
// For license information, please see license.txt

frappe.ui.form.on("Support Calls", {
	refresh(frm) {
        console.log("Support Calls refreshed");
        // frm.doc.history_log = "\n" + frm.doc.history_log + "\n" + Date() + ":\n" + frm.doc.action_details
        // frm.refresh_field("history_log")
	},
});

