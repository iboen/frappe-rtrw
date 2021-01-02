// Copyright (c) 2020, Sinawardi and contributors
// For license information, please see license.txt

frappe.ui.form.on('House', {
	refresh: function(frm) {
        frm.add_custom_button('Create House Member', () => {
            frappe.new_doc('House Member', {
                house: frm.doc.name
            })
        })
    }
});
