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

Event.on('new:order', 'OrderListener.onNewOrderCreated')
Event.on('change:shippingEvent', 'OrderListener.onChangeShippingEvent')
