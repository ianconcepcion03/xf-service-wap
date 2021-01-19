import request from '@/utils/request'

export function login(username, password, cdn, loginUrl, activeDevice, activeSystem, activeImei, code, uuid) {
  return request({
    url: 'member/login',
    method: 'post',
    data: {
      loginName: username,
      password: password,
      cdn: cdn,
      loginUrl: loginUrl,
      activeDevice: activeDevice,
      activeSystem: activeSystem,
      activeImei: activeImei,
      code: code,
      uuid: uuid
    }
  })
}

export function getInfo() {
  return request({
    url: 'auth/info',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}

export function logout(username, password) {
  return request({
    url: 'member/logout',
    method: 'delete',
    data: {
      loginName: username,
      password: password
    }
  })
}
