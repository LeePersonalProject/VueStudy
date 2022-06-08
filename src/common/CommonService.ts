import { catchError, defer, map, Observable, of, ReplaySubject, take } from 'rxjs';
import Axios, { AxiosRequestConfig } from  'axios';
import Util from './Util';

export default class CommonService {
     host?: string = "https://group.eagleoffice.co.kr"
     config: AxiosRequestConfig = {
        responseType: 'json',
        headers: {
            'Accept':'application/json, application/xml, application/octet-stream',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }

    private initializationAxios() {
        const axiosInstance = Axios.create(this.config);
        return axiosInstance;
    }

    protected get<T>(path: string, queryParams?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Util.console(`GET: ${requestURL}`)
        Util.console(`Query: ${JSON.stringify(queryParams, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=> 
            axiosInstance.get<T>(requestURL, {params: queryParams}))
            .pipe(map(result => result.data)
        )
    }

    protected post<T>(path: string, params?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Util.console(`POST: ${requestURL}`)
        Util.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=> 
            axiosInstance.post<T>(requestURL, params))
            .pipe(map(result => result.data)
        )
    }

    protected put<T>(path: string, params?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Util.console(`PUT: ${requestURL}`)
        Util.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=> 
            axiosInstance.put<T>(requestURL, params))
            .pipe(map(result => result.data)
            
        )
    }

    protected delete<T>(path: string, params?: object): Observable<T> {
        const requestURL = this.settingURL(this.host, path)
        Util.console(`delete: ${requestURL}`)
        Util.console(`Params: ${JSON.stringify(params, null, 2)}`)
        const axiosInstance = this.initializationAxios()
        return defer(()=> 
            axiosInstance.delete<T>(requestURL, params))
            .pipe(map(result => result.data)
        )
    }

    private settingURL(host?: string, path?: string): string {
        return `${host}/${path}`
    }

    /**
     * API 응답값 next 처리
     * @param req 옵저버블 요청
     * @param ob 옵저버 구독 처리 변수
     */
    fetch(req: Observable<any>, ob: ReplaySubject<any>) {
       req
        .pipe(
            take(1),
            catchError(e => of(Util.console(e)))
        ).subscribe(
            (res: any) => {
                Util.console("Fetch")
                Util.console(res)
                ob.next(res)
            }
        )
    }
    
}