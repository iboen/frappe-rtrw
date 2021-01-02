// Copyright (c) 2020, Sinawardi and contributors
// For license information, please see license.txt

frappe.ui.form.on('RW', {
	refresh: function(frm) {
        frm.add_custom_button('Create RT', () => {
            frappe.new_doc('RT', {
                rw: frm.doc.name
            })
        })
    }
});
