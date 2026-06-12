import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class MediumApi implements ICredentialType {
        name = 'N8nDevMediumApi';

        displayName = 'Medium API';

        icon: Icon = { light: 'file:../nodes/Medium/medium.png', dark: 'file:../nodes/Medium/medium.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://medium2.p.rapidapi.com',
                        required: true,
                        placeholder: 'https://medium2.p.rapidapi.com',
                        description: 'The base URL of your Medium API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'x-rapidapi-host': '={{$credentials.apiKey}}',
                        },
                },
        };


}
