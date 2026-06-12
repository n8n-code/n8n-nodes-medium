import type { INodeProperties } from 'n8n-workflow';

export const listDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"List"
					]
				}
			},
			"options": [
				{
					"name": "GET List",
					"value": "GET List",
					"action": "Get List Info",
					"description": "Returns the list-related information such as *id, name, author, description,  thumbnail image url, creation datetime, last article inserted datetime,  number of articles in the list, claps, voters, and comments/responses*.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/list/{{$parameter[\"list_id\"]}}"
						}
					}
				},
				{
					"name": "GET List Articles",
					"value": "GET List Articles",
					"action": "Get List Articles",
					"description": "Returns an array of `articles_ids` present in the given Medium List.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/list/{{$parameter[\"list_id\"]}}/articles"
						}
					}
				},
				{
					"name": "GET List Responses",
					"value": "GET List Responses",
					"action": "Get List Responses",
					"description": "Returns an array of `response_ids` of the comments (same as `article_ids`) on the given Medium List.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/list/{{$parameter[\"list_id\"]}}/responses"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /list/{list_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"List"
					],
					"operation": [
						"GET List"
					]
				}
			}
		},
		{
			"displayName": "List ID",
			"name": "list_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium List.",
			"default": "38f9e0f9bea6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"List"
					],
					"operation": [
						"GET List"
					]
				}
			}
		},
		{
			"displayName": "GET /list/{list_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"List"
					],
					"operation": [
						"GET List Articles"
					]
				}
			}
		},
		{
			"displayName": "List ID",
			"name": "list_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium List.",
			"default": "38f9e0f9bea6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"List"
					],
					"operation": [
						"GET List Articles"
					]
				}
			}
		},
		{
			"displayName": "GET /list/{list_id}/responses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"List"
					],
					"operation": [
						"GET List Responses"
					]
				}
			}
		},
		{
			"displayName": "List ID",
			"name": "list_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium List.",
			"default": "38f9e0f9bea6",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"List"
					],
					"operation": [
						"GET List Responses"
					]
				}
			}
		},
];
