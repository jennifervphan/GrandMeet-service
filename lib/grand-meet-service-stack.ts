import * as cdk from '@aws-cdk/core';
import * as cognito from '@aws-cdk/aws-cognito';

export class GrandMeetServiceStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pool = new cognito.UserPool(this, 'grandmeet', {
      userPoolName: 'grandmeet-userpool',
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: 'Verify your email for GrandMeet!',
        emailBody: 'Hello {username}, Thanks for signing up to GrandMeet! Your verification code is {####}',
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      userInvitation: {
        emailSubject: 'Invite to join GrandMeet!',
        emailBody: 'Hello {username}, you have been invited to join GrandMeet! Your temporary password is {####}'
      },
      signInAliases: {
        email: true
      },
        customAttributes: {
          'joinedOn': new cognito.DateTimeAttribute(),
    },
      passwordPolicy: {
        minLength: 12
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY
  });

    pool.addClient('grandmeet-app-client');
  }
}
