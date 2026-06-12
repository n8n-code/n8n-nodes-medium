import type { INodeProperties } from 'n8n-workflow';

export const welcomeDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Welcome"
					]
				}
			},
			"options": [
				{
					"name": "GET",
					"value": "GET",
					"action": "Get Welcome",
					"description": "**Test Endpoint**\nReturns the information about the Medium API\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Welcome"
					],
					"operation": [
						"GET"
					]
				}
			}
		},
];
