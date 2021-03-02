const core = require('@actions/core');
const github = require('@actions/github');

(async () => {
    try {
        // `token`, `project_url`, `column`, `action` inputs defined in action metadata file
        const token = core.getInput('token');
        const projectURL = core.getInput('project_url');
        const column = core.getInput('column');
        const action = core.getInput('action');

        core.info('Log inputs to the actions build log');
        core.info('Start!');
        console.log(`Token ${token}`);
        console.log(`Project URL ${projectURL}`);
        console.log(`Column ${column}`);
        console.log(`Action ${action}`);
        core.info('End!');

        core.info('Log github');
        console.log(github.context);
        console.log(github.context.payload.issue);
        console.log(github.context.payload.pull_request);

        core.info('Log payload');
        core.info('Start!');
        // Get the JSON webhook payload for the event that triggered the workflow
        const payload = JSON.stringify(github.context.payload, undefined, 2)
        console.log(`The event payload: ${payload}`);
        core.info('End!');

    } catch (error) {
        core.setFailed(error.message);
    }
})();
