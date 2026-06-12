import type { INodeProperties } from 'n8n-workflow';

export const searchDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					]
				}
			},
			"options": [
				{
					"name": "GET Search Articles Query Query",
					"value": "GET Search Articles Query Query",
					"action": "Search Articles",
					"description": "Returns the list of `articles_ids` for the given search query results. (Max Length = 1000)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/articles?query={{$parameter[\"query\"]}}"
						}
					}
				},
				{
					"name": "GET Search Lists Query Query",
					"value": "GET Search Lists Query Query",
					"action": "Search Lists",
					"description": "Returns an array of `list_ids` for the given search query results. (Max Length = 1000)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/lists?query={{$parameter[\"query\"]}}"
						}
					}
				},
				{
					"name": "GET Search Publications Query Query",
					"value": "GET Search Publications Query Query",
					"action": "Search Publications",
					"description": "Returns the list of `publication_ids` for the given search query results. (Max Length = 1000)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/publications?query={{$parameter[\"query\"]}}"
						}
					}
				},
				{
					"name": "GET Search Tags Query Query",
					"value": "GET Search Tags Query Query",
					"action": "Search Tags",
					"description": "Returns a list of `tags` for the given search query results. (Max Length = 1000)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/tags?query={{$parameter[\"query\"]}}"
						}
					}
				},
				{
					"name": "GET Search Users Query Query",
					"value": "GET Search Users Query Query",
					"action": "Search Users",
					"description": "Returns a list of `user_ids` for the given search query results. (Max Length = 1000)\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/search/users?query={{$parameter[\"query\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /search/articles?query={query}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Articles Query Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Search query",
			"default": "startup",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Articles Query Query"
					]
				}
			}
		},
		{
			"displayName": "GET /search/lists?query={query}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Lists Query Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Search query",
			"default": "artificial intelligence",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Lists Query Query"
					]
				}
			}
		},
		{
			"displayName": "GET /search/publications?query={query}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Publications Query Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Search query",
			"default": "mental health",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Publications Query Query"
					]
				}
			}
		},
		{
			"displayName": "GET /search/tags?query={query}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Tags Query Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Search query",
			"default": "blockchain",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Tags Query Query"
					]
				}
			}
		},
		{
			"displayName": "GET /search/users?query={query}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Users Query Query"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "query",
			"required": true,
			"description": "Search query",
			"default": "data engineer",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Search"
					],
					"operation": [
						"GET Search Users Query Query"
					]
				}
			}
		},
];
