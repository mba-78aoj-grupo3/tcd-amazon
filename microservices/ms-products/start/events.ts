/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Event from '@ioc:Adonis/Core/Event'

Event.on('new:product', 'ProductListener.onNewProduct')
Event.on('view:product', 'ProductListener.onNewViewProduct')
