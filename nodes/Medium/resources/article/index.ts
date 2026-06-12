import type { INodeProperties } from 'n8n-workflow';

export const articleDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					]
				}
			},
			"options": [
				{
					"name": "GET Article",
					"value": "GET Article",
					"action": "Get Article Info",
					"description": "Returns the article related information such as *Title, Subtitle, Tags,  Topics* (assigned by Medium), *Publication, Published date and time,  Clap Count, Voter Count, Word Count, Reading Time, Language, etc…*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/article/{{$parameter[\"article_id\"]}}"
						}
					}
				},
				{
					"name": "GET Article Content",
					"value": "GET Article Content",
					"action": "Get Article's Content",
					"description": "Returns the content of an article/story, for the corresponding `article_id`\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/article/{{$parameter[\"article_id\"]}}/content"
						}
					}
				},
				{
					"name": "GET Article Fans",
					"value": "GET Article Fans",
					"action": "Get Article Fans",
					"description": "Returns a list of `user_ids` of the people who clapped on the article (a.k.a `voters`).\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/article/{{$parameter[\"article_id\"]}}/fans"
						}
					}
				},
				{
					"name": "GET Article Markdown",
					"value": "GET Article Markdown",
					"action": "Get Article's Markdown",
					"description": "Returns the markdown of an article/story from Medium, for the corresponding `article_id`\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/article/{{$parameter[\"article_id\"]}}/markdown"
						}
					}
				},
				{
					"name": "GET Article Related",
					"value": "GET Article Related",
					"action": "Get Related Articles",
					"description": "Returns a list of `article_ids` of the related posts. (Length = 5)\n\n**Note:** If the given article is self-published, related posts will belong to the same author,  else related posts will belong to the publication in which the article is published.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/article/{{$parameter[\"article_id\"]}}/related"
						}
					}
				},
				{
					"name": "GET Article Responses",
					"value": "GET Article Responses",
					"action": "Get Article Responses",
					"description": "Returns a list of responses (`response_ids`, same as `article_ids`) for a given article (`article_id`)\nNote: To see the content of the response, use the \"Get Article's Content\" endpoint\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/article/{{$parameter[\"article_id\"]}}/responses"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /article/{article_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Article.",
			"default": "f06086080568",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article"
					]
				}
			}
		},
		{
			"displayName": "GET /article/{article_id}/content",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Content"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Article.",
			"default": "562c5821b5f0",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Content"
					]
				}
			}
		},
		{
			"displayName": "GET /article/{article_id}/fans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Fans"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Article.",
			"default": "67fa62fc1971",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Fans"
					]
				}
			}
		},
		{
			"displayName": "GET /article/{article_id}/markdown",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Markdown"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Article.",
			"default": "67fa62fc1971",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Markdown"
					]
				}
			}
		},
		{
			"displayName": "GET /article/{article_id}/related",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Related"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Article.",
			"default": "67fa62fc1971",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Related"
					]
				}
			}
		},
		{
			"displayName": "GET /article/{article_id}/responses",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Responses"
					]
				}
			}
		},
		{
			"displayName": "Article ID",
			"name": "article_id",
			"required": true,
			"description": "It's a unique hash id assigned to every Medium Article.",
			"default": "67fa62fc1971",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Article"
					],
					"operation": [
						"GET Article Responses"
					]
				}
			}
		},
];
