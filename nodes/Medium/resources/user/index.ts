import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "GET User ID For",
					"value": "GET User ID For",
					"action": "Get User ID",
					"description": "Returns the unique `user_id` for the given `username`.\n\n**Note:** You can find the `username` from the user's/author's profile page URL. \n- **username**.medium.com\n- medium.com/@**username**\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/id_for/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "GET User",
					"value": "GET User",
					"action": "Get User Info",
					"description": "Returns user related information like *Full name, Bio, Followers count, Following count, Twitter username, Profile-image URL, User ID, etc...* \n\nIt takes `user_id` as the path parameter.\n\n**Note:** If you don't know the `user_id`, then you can get it from the endpoint\\\n'/user/id_for/{`username`}'.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}"
						}
					}
				},
				{
					"name": "GET User Articles",
					"value": "GET User Articles",
					"action": "Get User's Articles",
					"description": "Returns the list of articles (`article_ids`) written by the user.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}/articles"
						}
					}
				},
				{
					"name": "GET User Followers",
					"value": "GET User Followers",
					"action": "Get User Followers",
					"description": "Returns the list of `user_ids` of the user's followers.\n\n**Note:** The length of this followers' list might be different from what you get in  the \"Get User Info\" Endpoint. It's because, this list doesn't include Medium Users who  left the platform.\nIf you really need the exact followers' count, use this endpoint to get the followers'  list and take its length as the exact followers' count\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}/followers"
						}
					}
				},
				{
					"name": "GET User Following",
					"value": "GET User Following",
					"action": "Get User Following",
					"description": "Returns the list of `user_ids` of the user's followings.\n\n**Note:** Currently, this list does not contain the `publication_ids` of the publications that the user is following.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}/following"
						}
					}
				},
				{
					"name": "GET User Interests",
					"value": "GET User Interests",
					"action": "Get User's Interests",
					"description": "Returns a list of tags that the given user follows.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}/interests"
						}
					}
				},
				{
					"name": "GET User Lists",
					"value": "GET User Lists",
					"action": "Get User's Lists",
					"description": "Returns an array of `list_ids` created by the user.\n\n**Note:** You can check whether the use has created lists or not beforehand. Check the  `has_list` attribute in the \"Article Info\" endpoint.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}/lists"
						}
					}
				},
				{
					"name": "GET User Publications",
					"value": "GET User Publications",
					"action": "Get User's Publications",
					"description": "Returns a list of `publication_ids` where the user is the editor and/or creator.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}/publications"
						}
					}
				},
				{
					"name": "GET User Top Articles",
					"value": "GET User Top Articles",
					"action": "Get User's Top Articles",
					"description": "Returns a list of `article_ids` of the top 10 articles on the user's profile, for a given `user_id`.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/user/{{$parameter[\"user_id\"]}}/top_articles"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /user/id_for/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User ID For"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "It's a unique string chosen by every single Medium user.",
			"default": "nishu-jain",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User ID For"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "It's a unique hash id assigned to every single Medium user.",
			"default": "1985b61817c3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}/articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Articles"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "Unique hash id assigned to every single Medium user.",
			"default": "1985b61817c3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Articles"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}/followers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Followers"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "Unique hash id assigned to every single Medium user.",
			"default": "1985b61817c3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Followers"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "To limit the number of results. (count &lt; 1500)",
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
						"User"
					],
					"operation": [
						"GET User Followers"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}/following",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Following"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "Unique hash id assigned to every single Medium user.",
			"default": "14d5c41e0264",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Following"
					]
				}
			}
		},
		{
			"displayName": "Count",
			"name": "count",
			"description": "To limit the number of results. (count &lt; 1500)",
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
						"User"
					],
					"operation": [
						"GET User Following"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}/interests",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Interests"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "Unique hash id assigned to every single Medium user.",
			"default": "1985b61817c3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Interests"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}/lists",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Lists"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "Unique hash id assigned to every single Medium user.",
			"default": "5142451174a3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Lists"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}/publications",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Publications"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "Unique hash id assigned to every single Medium user.",
			"default": "14d5c41e0264",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Publications"
					]
				}
			}
		},
		{
			"displayName": "GET /user/{user_id}/top_articles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Top Articles"
					]
				}
			}
		},
		{
			"displayName": "User ID",
			"name": "user_id",
			"required": true,
			"description": "Unique hash id assigned to every single Medium user.",
			"default": "1985b61817c3",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"GET User Top Articles"
					]
				}
			}
		},
];
