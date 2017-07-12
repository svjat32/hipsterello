/**
 * Created by @nikitalpopov on 13/07/2017.
 */
import { User as UserModel } from '../entities/user/User';

export default class User {
    /**
     * @description Создаем пользователя
     * @param userData
     */
    static createUser(userData) {
        const UserModelInstance = new UserModel({
            email: userData.email,
            password: userData.password
        });

        return UserModelInstance.save()
            .then((result) => {
                return result;
        });
    };

    /**
     * @description Находим пользователя по его id
     * @param userId
     */
    static findUserById(userId) {
        return UserModel.findById(userId);
    };

    /**
     * @description Находим пользователя по его email
     * @param userData
     */
    static findUserByEmail(userData) {
        return UserModel.findOne({ email: userData.email });
    };
    /**
     * @description Обновляем данные пользователя
     * @param userData
     * @param password
     */
    static updateUser(userData, password) {
        return UserModel
            .findById(userData._id)
            .then((foundUser) => {
                if (password === foundUser.password) {
                    if (userData.email) {
                        foundUser.email = userData.email;
                    }
                    if (userData.password) {
                        foundUser.password = userData.password;
                    }
                }
                return foundUser.save(); })
            .then((savedResult) => {
                return savedResult;
        });
    };

    /**
     * @description Удаляем данные пользователя
     * @param userData
     * @param password
     */
    static deleteUser(userData, password) {
        if (!userData._id && !userData.email) {
            throw new Error('There is no ids for delete!')
        }
        if (userData._id) {
            return UserModel
                .findById(userData._id)
                .then((foundUser) => {
                    if (password === foundUser.password) {
                        return foundUser.remove();
                    }
                })
                .then((deletedResult) => {
                    return deletedResult;
            });
        } else {
            return UserModel
                .findOne({ email: userData.email })
                .then((foundUser) => {
                    if (password === foundUser.password) {
                        return foundUser.remove();
                    }
                })
                .then((deletedResult) => {
                    return deletedResult;
            });
        }
    };
}