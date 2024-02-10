import { awscdk } from 'projen';
import { JobPermission } from 'projen/lib/github/workflows-model';

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Daniel Jonsén',
  authorAddress: 'djonser1@gmail.com',
  cdkVersion: '2.82.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.2.0',
  name: '@catnekaise/cdk-iam-utilities',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/catnekaise/cdk-iam-utilities.git',
  description: 'Experimental utilities intended for AWS CDK IAM',
  license: 'Apache-2.0',
  buildWorkflow: true,
  pullRequestTemplate: false,
  releaseToNpm: false,
  release: true,
  depsUpgrade: false,
  gitignore: ['.idea'],
  stability: 'experimental',
  githubOptions: {
    pullRequestLint: true,
    mergify: false,
  },
  publishToNuget: {
    dotNetNamespace: 'Catnekaise.CDK.IamUtilities',
    packageId: 'Catnekaise.CDK.IamUtilities',
  },

});


const packageJsTask = project.addTask('package:js', {
  description: 'Create js language bindings',
  exec: 'jsii-pacmak -v --target js',
});

const packageAllTask = project.tasks.tryFind('package-all');

if (!packageAllTask) {
  throw new Error('Cannot proceed');
}

packageAllTask.spawn(packageJsTask);

const releaseWorkflow = project.github?.workflows.find(x => x.name === 'release');

if (releaseWorkflow) {
  releaseWorkflow.addJob('release_npm', {
    uses: 'catnekaise/cdk-iam-utilities/.github/workflows/release-npm.yml@main',
    with: {},
    permissions: {
      contents: JobPermission.READ,
      idToken: JobPermission.WRITE,
    },
    secrets: {
      NPM_TOKEN: '${{ secrets.NPM_TOKEN }}',
    },
    needs: ['release'],
    if: 'needs.release.outputs.latest_commit == github.sha',
  });
}


project.synth();
