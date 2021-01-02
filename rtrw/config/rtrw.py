from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("RT RW"),
			"items": [
				{
					"type": "doctype",
					"name": "RW",
					"onboard": 1
				},
				{
					"type": "doctype",
					"name": "RT",
					"onboard": 1
				}
			]
		},
        {
			"label": _("Data Warga"),
			"items": [
				{
					"type": "doctype",
					"name": "House",
					"onboard": 1
				},
				{
					"type": "doctype",
					"name": "House Member",
					"onboard": 1
				},
				{
					"type": "doctype",
					"name": "Family",
					"onboard": 1
				}
			]
		}
	]
