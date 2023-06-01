import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log(`Database is connected successfully`)
  } catch (err) {
    console.log(`Failed to connect Database`, err)
  }
}
app.listen(config.port, () => {
  console.log(`Application listening on port ${config.port}`)
})
main()
