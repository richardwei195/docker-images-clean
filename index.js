const inquirer = require('inquirer')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

const key = 'Docker images clean tools'

inquirer
  .prompt([
    {
      type: 'expand',
      message: 'Sure to clean docker images?',
      name: 'Docker images clean tools',
      choices: [
        {
          key: 'a',
          name: 'Clean all images on your disk.',
          value: 'all'
        },
        {
          key: 'r',
          name: 'figure out registry',
          value: 'registry'
        },
        {
          key: 't',
          name: 'figure out registry and tag',
          value: 'tag'
        },
        {
          key: 'i',
          name: 'figure out image id',
          value: 'id'
        },
        new inquirer.Separator(),
        {
          key: 'c',
          name: 'Abort',
          value: 'abort'
        }
      ]
    }
  ])
  .then(async answer => {
    console.log('~~~~~~~doing~~~~~~~')
    const choiceVal = answer[key]
    let ret
    try {
      if (['id', 'tag'].includes(choiceVal)) {
        const answer = await inquirer.prompt([
          {
            type: 'input',
            name: choiceVal,
            message: choiceVal === 'id' ? "What's the image id ?" : "What's the registry:tag ?"
          }
        ])
  
        ret = await exec(`docker rmi ${answer[choiceVal]}`)
  
      } else if (choiceVal === 'registry') {
        console.log('attention: This operation deletes all registry that match this value, is you dont not want, use ctrl+c to exit.')

        const answer = await inquirer.prompt([
          {
            type: 'input',
            name: choiceVal,
            message: "What's the registry name ?"
          }
        ])

        ret = await exec(`docker images --format '{{.Repository}}:{{.Tag}}' | grep ${answer[choiceVal]} | xargs docker rmi`)
      } else if (choiceVal === 'all') {
        ret = await exec('docker rmi $(docker images -q)')
      } else {
        return
      }
      console.log(ret.stdout)
      console.log('~~~~~~~work success!~~~~~~~')
    } catch (error) {
      console.error(`exec error: ${error.message}`)
    }
  })
