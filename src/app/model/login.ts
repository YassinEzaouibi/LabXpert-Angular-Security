export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
  AccessToken: string;
  RefreshToken: string;
}