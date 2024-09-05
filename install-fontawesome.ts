const { execSync } = require('child_process')

const packageManager = 'pnpm'
const packages = [
  '@fortawesome/fontawesome-svg-core',
  '@fortawesome/free-solid-svg-icons',
  '@fortawesome/react-fontawesome'
]

function installDependencies(manager: string, packages: string[]) {
  const installCommand = `${manager} install ${packages.join(' ')}`
  console.log(`Running: ${installCommand}`)

  try {
    execSync(installCommand, { stdio: 'inherit' })
    console.log('Dependencies installed successfully!')
  } catch (error) {
    console.error('Error installing dependencies:', error)
  }
}

installDependencies(packageManager, packages)
