import type { INodeProperties } from 'n8n-workflow';

export const miscDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					]
				}
			},
			"options": [
				{
					"name": "GET Latestposts",
					"value": "GET Latestposts",
					"action": "Get Latest Posts",
					"description": "Returns a list of latest posts (`article_ids`) for a topic/niche (as classified by the Medium platform). Example of a topic/niche can be:\n* blockchain\n* relationships\n* mental-health, etc …\n\nThese are known as `topic_slugs`. At any given moment, this endpoint will return a list of 25 articles (`article_ids`).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/latestposts/{{$parameter[\"topic_slug\"]}}"
						}
					}
				},
				{
					"name": "GET Related Tags",
					"value": "GET Related Tags",
					"action": "Get Related Tags",
					"description": "Returns a list of `related_tags` for the given `tag`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/related_tags/{{$parameter[\"tag\"]}}"
						}
					}
				},
				{
					"name": "GET Top Writer",
					"value": "GET Top Writer",
					"action": "Get Top Writers",
					"description": "Returns a list of top writers (`user_ids`) within a particular topic/niche (`topic_slug`). \ne.g. \n- blockchain\n- relationships\n- artificial-intelligence, etc ...\n\n**Note:** You can use optional `count` query parameter to limit the number of results.  The maximum number of top writers within a topic/niche will be 250.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/top_writer/{{$parameter[\"topic_slug\"]}}"
						}
					}
				},
				{
					"name": "GET Topfeeds",
					"value": "GET Topfeeds",
					"action": "Get Topfeeds",
					"description": "Returns a list of `article_ids` (length: 25) for the given `tag` and `mode`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/topfeeds/{{$parameter[\"tag\"]}}/{{$parameter[\"mode\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /latestposts/{topic_slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Latestposts"
					]
				}
			}
		},
		{
			"displayName": "Topic Slug",
			"name": "topic_slug",
			"required": true,
			"description": "It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.",
			"default": "artificial-intelligence",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Latestposts"
					]
				}
			}
		},
		{
			"displayName": "GET /related_tags/{tag}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Related Tags"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"required": true,
			"description": "It's a unique string, usually hyphen-separated, representing a class of content.",
			"default": "blockchain",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Related Tags"
					]
				}
			}
		},
		{
			"displayName": "GET /top_writer/{topic_slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Top Writer"
					]
				}
			}
		},
		{
			"displayName": "Topic Slug",
			"name": "topic_slug",
			"required": true,
			"description": "It's a unique string, usually hyphen-separated, representing a topic/niche, as classified by Medium.",
			"default": "relationships",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Top Writer"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "Limits the number of `article_ids` in the result.",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Top Writer"
					]
				}
			}
		},
		{
			"displayName": "GET /topfeeds/{tag}/{mode}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Topfeeds"
					]
				}
			}
		},
		{
			"displayName": "Tag",
			"name": "tag",
			"required": true,
			"description": "It's a unique string, usually hyphen-separated, representing a class of content.",
			"default": "artificial-intelligence",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Topfeeds"
					]
				}
			}
		},
		{
			"displayName": "Mode",
			"name": "mode",
			"required": true,
			"description": "Mode:\n\n  - `hot` : For getting trending articles\n  - `new` : For getting latest articles\n  - `top_year` : For getting best articles of the year\n  - `top_month` : For getting best articles of the month\n  - `top_week` : For getting best articles of the week\n  - `top_all_time`: For getting best article of all time\n",
			"default": "new",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Topfeeds"
					]
				}
			}
		},
		{
			"displayName": "After",
			"name": "after",
			"description": "To get the subsequent top feeds. (`after` &lt; 250)",
			"default": 10,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "after",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Topfeeds"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "To limit the number of top feeds. (`count` &lt; 25)",
			"default": 20,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "count",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Misc"
					],
					"operation": [
						"GET Topfeeds"
					]
				}
			}
		},
];
