import type { INodeProperties } from 'n8n-workflow';

export const publicationDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					]
				}
			},
			"options": [
				{
					"name": "GET Publication ID For",
					"value": "GET Publication ID For",
					"action": "Get Publication ID",
					"description": "Returns the unique `publication_id` for the given `publication_slug`.\n\n**Note:** You can find the `publication_slug` from the publication's homepage URL.\n- medium.com/**publication_slug**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/publication/id_for/{{$parameter[\"publication_slug\"]}}"
						}
					}
				},
				{
					"name": "GET Publication",
					"value": "GET Publication",
					"action": "Get Publication Info",
					"description": "Returns the publication related information such as *Publication name, Tagline, Description, Tags, Followers Count, Twitter username, Instagram username, Facebook Page name, etc …*\n\n**Note:** If you don't know the `publication_id`, you can get it from any article published by it. Use endpoint \"/article/{article_id}\" to retrieve the `publication_id`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/publication/{{$parameter[\"publication_id\"]}}"
						}
					}
				},
				{
					"name": "GET Publication Articles",
					"value": "GET Publication Articles",
					"action": "Get Publication Articles",
					"description": "Returns the list of `articles_ids`, of the latest 25 articles, posted in that publication.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/publication/{{$parameter[\"publication_id\"]}}/articles"
						}
					}
				},
				{
					"name": "GET Publication Newsletter",
					"value": "GET Publication Newsletter",
					"action": "Get Publication Newsletter",
					"description": "Returns the newsletter related information such as *id, name, description, slug, creator_id, subscribers, image_url, etc …*\n\n**Note:** If you don't know the `publication_id`, you can get it from any article published by it. Use endpoint \"/article/{article_id}\" to retrieve the `publication_id`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/publication/{{$parameter[\"publication_id\"]}}/newsletter"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /publication/id_for/{publication_slug}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication ID For"
					]
				}
			}
		},
		{
			"displayName": "Publication Slug",
			"name": "publication_slug",
			"required": true,
			"description": "It's a lowercased hyphen-separated unique string alloted to each Medium Publication.",
			"default": "codex",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication ID For"
					]
				}
			}
		},
		{
			"displayName": "GET /publication/{publication_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication"
					]
				}
			}
		},
		{
			"displayName": "Publication ID",
			"name": "publication_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Publication.",
			"default": "98111c9905da",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication"
					]
				}
			}
		},
		{
			"displayName": "GET /publication/{publication_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication Articles"
					]
				}
			}
		},
		{
			"displayName": "Publication ID",
			"name": "publication_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Publication.",
			"default": "98111c9905da",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication Articles"
					]
				}
			}
		},
		{
			"displayName": "From",
			"name": "from",
			"description": "To get the articles before specified date and time.",
			"default": "2023-01-31T13:10:00",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "from",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication Articles"
					]
				}
			}
		},
		{
			"displayName": "GET /publication/{publication_id}/newsletter",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication Newsletter"
					]
				}
			}
		},
		{
			"displayName": "Publication ID",
			"name": "publication_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Publication.",
			"default": "98111c9905da",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Publication"
					],
					"operation": [
						"GET Publication Newsletter"
					]
				}
			}
		},
];
