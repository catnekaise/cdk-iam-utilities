import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Daniel Jonsén',
  authorAddress: 'djonser1@gmail.com',
  cdkVersion: '2.82.0',
  projenVersion: '^0.80.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
  name: '@catnekaise/cdk-iam-utilities',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/catnekaise/cdk-iam-utilities.git',
  description: 'Experimental utilities intended for AWS CDK IAM',
  license: 'Apache-2.0',
  buildWorkflow: true,
  pullRequestTemplate: false,
  releaseToNpm: true,
  release: true,
  depsUpgrade: false,
  gitignore: ['.idea'],
  stability: 'experimental',
  npmProvenance: true,
  npmAccess: NpmAccess.PUBLIC,
  githubOptions: {
    pullRequestLint: true,
    mergify: false,
  },
  publishToNuget: {
    dotNetNamespace: 'Catnekaise.CDK.IamUtilities',
    packageId: 'Catnekaise.CDK.IamUtilities',
  },
  publishToPypi: {
    distName: 'catnekaise.cdk-iam-utilities',
    module: 'catnekaise_cdk_iam_utilities',
  },
  publishToGo: {
    moduleName: 'github.com/catnekaise/cdk-iam-utilities-go',
    packageName: 'cdk_iam_utilities',
  },
});


project.synth();
