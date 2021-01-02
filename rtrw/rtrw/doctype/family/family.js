// Copyright (c) 2020, Sinawardi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Family', {
	// refresh: function(frm) {

	// }
	address_type: function(frm) {
		// $.each(frm.meta.fields, function(index, field){
		// 	frappe.msgprint(field.fieldname)
		
		// 	if (field.fieldname == 'address') {
		// 		frm.set_df_property(field.fieldname, "read_only", (frm.doc.address_type === 'Internal')?1:0);
		// 	}
		// })
		// frm.refresh();
		frm.set_df_property("address", "read_only", (frm.doc.address_type === 'Internal')?1:0)
		frm.set_df_property("head_name", "read_only", (frm.doc.address_type === 'Internal')?1:0)
		if(frm.doc.address_type !== 'Internal'){
			frm.set_value("house","")
			frm.set_value("head","")
			frm.set_value("address","")
			frm.set_value("head_name","")
		}
		frm.set_df_property("house", "read_only", (frm.doc.address_type !== 'Internal')?1:0)
		frm.set_df_property("head", "read_only", (frm.doc.address_type !== 'Internal')?1:0)
		
		// frm.doc.house_address.attr('readonly', true)
	},
	setup: function(frm) {
		frm.set_query("head", function() {
			return {
				filters: {
					house: frm.doc.house
				}
			}
		});
	}
});
