import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { welcomeDescription } from './resources/welcome';
import { userDescription } from './resources/user';
import { publicationDescription } from './resources/publication';
import { articleDescription } from './resources/article';
import { miscDescription } from './resources/misc';
import { listDescription } from './resources/list';
import { searchDescription } from './resources/search';

export class Medium implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Medium',
                name: 'N8nDevMedium',
                icon: { light: 'file:./medium.png', dark: 'file:./medium.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Medium API extracts data from medium.com.',
                defaults: { name: 'Medium' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMediumApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Welcome",
					"value": "Welcome",
					"description": ""
				},
				{
					"name": "User",
					"value": "User",
					"description": ""
				},
				{
					"name": "Publication",
					"value": "Publication",
					"description": ""
				},
				{
					"name": "Article",
					"value": "Article",
					"description": ""
				},
				{
					"name": "Misc",
					"value": "Misc",
					"description": ""
				},
				{
					"name": "List",
					"value": "List",
					"description": ""
				},
				{
					"name": "Search",
					"value": "Search",
					"description": ""
				}
			],
			"default": ""
		},
		...welcomeDescription,
		...userDescription,
		...publicationDescription,
		...articleDescription,
		...miscDescription,
		...listDescription,
		...searchDescription
                ],
        };
}
