frappe.pages['rt-rw'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'RT RW',
		single_column: true
	});
}