/**
 * @file socket 服务
 * @module plugins/socket.io
 * @author Surmon <https://github.com/surmon-china>
 */

import io from 'socket.io-client'
import API_CONFIG from '/@/config/api.config'

const socket = io(API_CONFIG.SOCKET, {
  transports: ['websocket']
})

export default socket
